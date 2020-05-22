import { removeSync, writeJsonSync } from 'fs-extra';
import { JSDOM } from 'jsdom';
import { join } from 'path';
import { launch } from 'puppeteer';

let domain = 'https://boxcardonuts.ca';
let browser;

const runGetDoughnuts = async () => {
  const page = await getPage(
    `${domain}/product-category/donuts/our-weekly-flavours/`
  );

  const content = await page.content();
  const dom = new JSDOM(content);

  const doughnuts = Array.from(
    dom.window.document.querySelectorAll('.product_cat-our-weekly-flavours')
  ).map((node: any) => {
    let doughnut: any = {};
    doughnut.url = node.querySelector(`a[href]`).getAttribute('href');
    doughnut.id = doughnut.url.split(`${domain}/product/`).pop().slice(0, -1);
    return doughnut;
  });

  doughnuts.splice(0, 1);

  for (let i = 0; i < doughnuts.length; i++) {
    let doughnut = doughnuts[i];
    await page.goto(doughnut.url);

    const content = await page.content();
    const dom = new JSDOM(content);
    const pageClass = '.woocommerce-product-';

    doughnut.name = dom.window.document.querySelector(
      '.product_title'
    ).innerHTML;

    doughnut.price = `$${
      dom.window.document.querySelector('.amount').innerHTML.split('</span>')[1]
    }`;

    doughnut.description = dom.window.document
      .querySelector(`${pageClass}details__short-description > p`)
      .innerHTML.split(/\<[^>]*\>/g)
      .join('')
      .split('&nbsp;')
      .join('')
      .replace('  ', ' ');

    doughnut.imageUrl = dom.window.document
      .querySelector(`${pageClass}gallery__image > img`)
      .getAttribute('src');
  }

  removeSync(join(__dirname, './data/doughnuts.json'));
  writeJsonSync(join(__dirname, './data/doughnuts.json'), doughnuts);
};

(async () => {
  browser = await launch();
  await runGetDoughnuts();
  browser.close();
})();

async function getPage(url) {
  let page = await browser.newPage();
  await page.goto(url);
  return page;
}

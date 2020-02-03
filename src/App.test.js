import React from 'react';
import App from './App';

import { shallow } from 'enzyme';

import puppeteer from 'puppeteer';

describe('App', () => {
  test('renders without crashing', () => {
    shallow(<App />)
  });
  
  test('h1 loads correctly', async () => {
    let browser = await puppeteer.launch({
      headless: false
    });
    let page = await browser.newPage();
  
    page.emulate({
      viewport: {
        width: 500,
        height: 2400
      },
      userAgent: ''
    });
  
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('h1[e2e="search-label"]');
  
    const html = await page.$eval('h1[e2e="search-label"]', e => e.innerHTML);
    expect(html).toBe('Find your movie');
  
    browser.close();
  }, 16000);
});

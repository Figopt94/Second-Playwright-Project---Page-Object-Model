// @ts-check
import { test, expect } from '@playwright/test';
import GoogleMaps from '../pom/GoogleMaps.js';

test('Google Maps search and directions - simple', async ({ page }) => {
   const googleMaps = new GoogleMaps(page);
   await page.goto('https://www.google.com/maps');
   await googleMaps.acceptCookiesIfVisible();
   await googleMaps.searchLocation('Dublin');
   await googleMaps.verifyHeadline('Dublin');
   await googleMaps.clickDirections();
   await googleMaps.verifyDestinationContains('Dublin');
});
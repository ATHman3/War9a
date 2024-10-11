import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import { languagesValues } from './lib/constants';
 
// Can be imported from a shared config
const locales = languagesValues;
 
export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();
 
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
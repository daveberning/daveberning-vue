import {About} from '@/types';
// @ts-ignore
import numberToWords from 'number-to-words';

function years(): string {
  const years: number = new Date().getFullYear() - 2012;
  return numberToWords.toWords(years);
}

export const about: About = {
  firstName: 'Dave',
  lastName: 'Berning',
  role: 'Developer & Author',
  city: 'Cincinnati',
  state: 'Ohio',
  almaMaterLogo: `images/university-of-cincinnati-vector-logo.svg`,
  companyLogo: `images/oodle-logo.svg`,
  twitterHandle: `@daveberning`,
  bio: `<p>Dave Berning has been a front-end web developer for more than ${years()} years. He graduated from the
University of Cincinnati where he learned to create interactive websites with HTML, CSS, and JavaScript. Dave
currently builds rich progressive web applications with Vue.js. He is also a writer for Alligator.io and
organizer of the CodePen Cincinnati meetups where he lectures and leads workshops about the latest
technologies in the
field. You can find him almost anywhere on the World Wide Web as @daveberning.</p>
 
<p>I have worked with several companies over the years, each one giving me valuable experience and new skills.
Some of these companies include KalioCommerce, Hobsons Educational Solutions, Upright Communications, and
Drees Homes. My philosophy is that every great website should have a simple UI and be written with clean
code.</p>`
};

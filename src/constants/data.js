import images from './images';

const services = [
  {
    title: 'Portrait Photography',
    price: '$250',
    tags: 'AU | Personal',
  },
  {
    title: 'Wedding Photography',
    price: '$560',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Landscape Photography',
    price: '$300',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Studio Photoshoot',
    price: '$200',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Architecture Photography',
    price: '$200',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { services, awards };
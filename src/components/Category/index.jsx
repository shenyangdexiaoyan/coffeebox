import Card from '../Card';

const callouts = [
  {
    id: 1,
    name: 'Coffee beans',
    imageSrc:
      'https://images.photowall.com/products/53211/more-coffee-beans.jpg?h=699&q=85',
    href: '#',
  },
  {
    id: 2,
    name: 'Instant coffee',
    imageSrc:
      'https://www.eatthis.com/wp-content/uploads/sites/4/2022/10/making-instant-coffee.jpg?quality=82&strip=all',
    href: '#',
  },
  {
    id: 3,
    name: 'Organic coffee',
    imageSrc:
      'https://res.cloudinary.com/jerrick/image/upload/fl_progressive,q_auto,w_1024/ozryzxisypyx8u2miaix.jpg',
    href: '#',
  },
];

function Category() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>
          <ul className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map(({
              id, name, imageSrc, href,
            }) => (
              <Card id={id} name={name} imageSrc={imageSrc} href={href} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Category;

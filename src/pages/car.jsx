import { Helmet } from 'react-helmet-async';

import { CarView } from 'src/sections/car/view';

// ----------------------------------------------------------------------

export default function CarPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <CarView />
    </>
  );
}

import PageMain from '../../pages/page-main/page-main';

type AppProps = {
  placesNumber: number;
}

function App({placesNumber}: AppProps): JSX.Element {
  return (
    <PageMain placesNumber={placesNumber}/>
  );
}

export default App;

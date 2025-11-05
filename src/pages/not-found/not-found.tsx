import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function NotFound(): JSX.Element {
  return (
    <Fragment>
      <Helmet>
        <title>6 cities: not found</title>
      </Helmet>
      <div className="page page--gray page--login">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link className="header__logo-link" to={AppRoute.Main}>
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </Link>
              </div>
            </div>
          </div>
        </header>

        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">404 Not Found</h1>
              <Link to={AppRoute.Main} className="locations__item-link">Go to main page.</Link>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <Link to='#' className="locations__item-link">
                  <span>Amsterdam</span>
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>);
    </Fragment>
  );
}

export default NotFound;

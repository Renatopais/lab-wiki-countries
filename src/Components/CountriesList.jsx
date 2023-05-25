import { Link } from 'react-router-dom';
import React from 'react';

function CountriesList(props) {
  const { countries } = props;
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="list-group">
              {countries.map((country) => {
                return (
                  <div>
                    <Link
                      className="list-group-item list-group-item-action"
                      to={`/${country.alpha3Code}`}
                    >
                      <img
                        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                        alt=""
                      />
                      <p>{country.name.common}</p>{' '}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountriesList;

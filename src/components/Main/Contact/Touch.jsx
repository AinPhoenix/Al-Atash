import React from 'react';
import classes from './Contact.module.css';
import ContactData from '../../../data/ContactData';

const Touch = () => {
  return (
    <section
      style={{
        justifyContent: 'center',
        width: '100%',
        backgroundColor: 'black',
      }}
      className={`${classes.Touch}`}
    >
      <h1 className="display-3 text-center py-3" style={{ color: 'white' }}>
        GET IN TOUCH
      </h1>

      <div style={{ color: 'white' }}>
        <div
          style={{
            width: '100%',

            justifyContent: 'center',
          }}
          className={`text-center ${classes.TouchBoxesBox}`}
        >
          <div className={classes.TouchBoxes}>
            <div
              style={{
                color: '#04AEC4',
              }}
            >
              <i
                className={`fas fa-map-marker-alt ${classes.BoxPhone}`}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '50%',
                }}
              ></i>
            </div>
            <h5 className="m-2" style={{}}>
              Address
            </h5>
            <p className="p-0 m-0">Al Atash Group</p>
            <p className="p-0 m-0">
              Adiq Arcade, Phase 5-B,
              <br /> Near Kalma Chowk,
            </p>
            <p className="p-0 m-0">Ghouri Town, Islamabad</p>
          </div>

          <div className={classes.TouchBoxes}>
            <div style={{}}>
              <div
                style={{
                  color: '#04AEC4',
                }}
              >
                <i
                  className={`fas fa-phone-alt ${classes.BoxPhone}`}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '50%',
                  }}
                ></i>
              </div>
              <h5 className="m-2" style={{ fontWeight: 'Bold' }}>
                Phone
              </h5>
              <p className="p-0 m-0">{ContactData.contact}</p>
            </div>
          </div>

          <div className={classes.TouchBoxes}>
            <div style={{}}>
              <div
                style={{
                  color: '#04AEC4',
                }}
              >
                <i
                  className={`fas fa-envelope ${classes.BoxPhone}`}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '50%',
                  }}
                ></i>
              </div>
              <h5 className="m-2" style={{ fontWeight: 'Bold' }}>
                Email
              </h5>
              <p className="p-0 m-0">{ContactData.email}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Touch;

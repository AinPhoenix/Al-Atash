import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectsFunction from '../../functions/Estimation & Management/ProjectsFunction';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../components/Estimation & Management/Home/style.css';
import classes from './EstimationManagementProject.module.css';

const EstimationManagementProject = () => {
  let { projectId } = useParams();

  const data = ProjectsFunction.fetchProject(+projectId);
  console.log(data);

  const priceComp = () => {
    if (data.price != 0) {
      return (
        <div className={classes.pricecomp} style={{}}>
          <div className={classes.pricecompchild} style={{}}>
            PKR {data.price}/-
          </div>
        </div>
      );
    } else {
      return;
    }
  };

  const automateslider = () => {
    var returnArr = [];
    for (let i = 0; i < data.pictures.length; i++) {
      if (i == 0) {
        returnArr.push(
          <SwiperSlide className={classes.automateslider} style={{}}>
            {' '}
            <img className={classes.automatesliderimg} style={{}} src={data.pictures[i]} />{' '}
          </SwiperSlide>
        );
      } else {
        returnArr.push(
          <SwiperSlide className={classes.automateslider1} style={{}}>
            {' '}
            <img className={classes.automatesliderimg} style={{}} src={data.pictures[i]} />{' '}
          </SwiperSlide>
        );
      }
    }
    return returnArr;
  };

  return (
    <div>
      <div>
        <div style={{ height: '70vh', width: '100%' }}>
          <img style={{ height: '100%', width: '100%', objectFit: 'cover' }} src={data.pictures[0]} />
        </div>
        <div
          style={{
            display: 'flex',
            height: '30vh',
            justifyContent: 'space-evenly',
            flexDirection: 'column',
            padding: '5vh 9vh',
          }}
        >
          <div style={{ fontSize: '5vh' }}>{data.projectName}</div>
          <div style={{ fontSize: '3vh' }}>{data.work}</div>
          <div>{priceComp()}</div>
        </div>
      </div>

      {/* SLider */}
      <div style={{ padding: '6vh' }}>
        <Swiper slidesPerView="auto" style={{ padding: '0 30px 0' }} className={`mySwiper`}>
          {automateslider()}
        </Swiper>
      </div>
      <div style={{ padding: '3vh' }}></div>
      {/* box */}
      <div
        style={{
          display: 'flex',
          padding: '10vh  15vh',
          flexDirection: 'row',
          justifyContent: 'space-around',
          color: '#FFFFFF',
          width: '100%',
          height: '50vh',
          background: '#191D19 0% 0% no-repeat padding-box',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div
              style={{
                borderRadius: '2vh',
                border: '5px solid white',
                padding: '17px',
                margin: 'auto',
                textAlign: 'center',
              }}
            >
              <i class="fa fa-list" aria-hidden="true"></i>
            </div>
            <div style={{ marginLeft: '2vh', width: '30vh' }}>
              <div style={{ fontSize: '28px' }}>Project Name</div>
              <div style={{ fontSize: '20px' }}>{data.projectName}</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div
              style={{
                borderRadius: '2vh',
                border: '5px solid white',
                padding: '17px',
                margin: 'auto',
                textAlign: 'center',
              }}
            >
              <i class="fa fa-list" aria-hidden="true"></i>
            </div>
            <div style={{ marginLeft: '2vh', width: '30vh' }}>
              <div style={{ fontSize: '28px' }}>Client</div>
              <div style={{ fontSize: '20px' }}>{data.client}</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div
              style={{
                borderRadius: '2vh',
                border: '5px solid white',
                padding: '17px',
                margin: 'auto',
                textAlign: 'center',
              }}
            >
              <i class="fa fa-list" aria-hidden="true"></i>
            </div>
            <div style={{ marginLeft: '2vh', width: '30vh' }}>
              <div style={{ fontSize: '28px' }}>Location</div>
              <div style={{ fontSize: '20px' }}>{data.siteLocation}</div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div
              style={{
                borderRadius: '2vh',
                border: '5px solid white',
                padding: '17px',
                margin: 'auto',
                textAlign: 'center',
              }}
            >
              <i class="fa fa-list" aria-hidden="true"></i>
            </div>
            <div style={{ marginLeft: '2vh', width: '30vh' }}>
              <div style={{ fontSize: '28px' }}>Project</div>
              <div style={{ fontSize: '20px' }}>{data.project}</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div
              style={{
                borderRadius: '2vh',
                border: '5px solid white',
                padding: '17px',
                margin: 'auto',
                textAlign: 'center',
              }}
            >
              <i class="fa fa-list" aria-hidden="true"></i>
            </div>
            <div style={{ marginLeft: '2vh', width: '30vh' }}>
              <div style={{ fontSize: '28px' }}>Work</div>
              <div style={{ fontSize: '20px' }}>{data.work}</div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div
              style={{
                borderRadius: '2vh',
                border: '5px solid white',
                padding: '17px',
                margin: 'auto',
                textAlign: 'center',
              }}
            >
              <i class="fa fa-list" aria-hidden="true"></i>
            </div>
            <div style={{ marginLeft: '2vh', width: '30vh' }}>
              <div style={{ fontSize: '28px' }}>Work Title</div>
              <div style={{ fontSize: '20px' }}>{data.workTitle}</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div
              style={{
                borderRadius: '2vh',
                border: '5px solid white',
                padding: '17px',
                margin: 'auto',
                textAlign: 'center',
              }}
            >
              <i class="fa fa-list" aria-hidden="true"></i>
            </div>
            <div style={{ marginLeft: '2vh', width: '20vh' }}>
              <div style={{ fontSize: '28px' }}>Unit</div>
              <div style={{ fontSize: '20px' }}>{data.unit}</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div
              style={{
                borderRadius: '2vh',
                border: '5px solid white',
                padding: '17px',
                margin: 'auto',
                textAlign: 'center',
              }}
            >
              <i class="fa fa-list" aria-hidden="true"></i>
            </div>
            <div style={{ marginLeft: '2vh', width: '20vh' }}>
              <div style={{ fontSize: '28px' }}>Project Type</div>
              <div style={{ fontSize: '20px' }}>{data.projectType}</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div
              style={{
                borderRadius: '2vh',
                border: '5px solid white',
                padding: '17px',
                margin: 'auto',
                textAlign: 'center',
              }}
            >
              <i style={{}} class="fa fa-list" aria-hidden="true"></i>
            </div>
            <div style={{ marginLeft: '2vh', width: '20vh' }}>
              <div style={{ fontSize: '28px' }}>Building</div>
              <div style={{ fontSize: '20px' }}>{data.buildingArea}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstimationManagementProject;

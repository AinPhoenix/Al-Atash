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
        <div className={classes.maindisp} style={{}}>
          <img className={classes.maindispimg} style={{}} src={data.pictures[0]} />
        </div>
        <div className={classes.maindisptext} style={{}}>
          <div className={classes.maindisptexth1} style={{}}>
            {data.projectName}
          </div>
          <div className={classes.maindisptexth2} style={{}}>
            {data.work}
          </div>
          <div>{priceComp()}</div>
        </div>
      </div>

      {/* SLider */}
      <div className={classes.sliders} style={{}}>
        <Swiper slidesPerView="auto" style={{ overflowY: 'hidden', padding: '0 30px 0' }} className={`mySwiper`}>
          {automateslider()}
        </Swiper>
      </div>
      <div style={{ padding: '3vh' }}></div>

      {/* box */}
      <div className={classes.boxmain} style={{}}>
        <div className={classes.box2} style={{}}>
          <div className={classes.box3}>
            <div className={classes.box4}>
              <i class="fa fa-list" aria-hidden="true"></i>
            </div>
            <div className={classes.boxdata}>
              <div className={classes.boxfont1} style={{}}>
                Project Name
              </div>
              <div className={classes.boxfont2} style={{}}>
                {data.projectName}
              </div>
            </div>
          </div>

          <div className={classes.box3}>
            <div className={classes.box4}>
              <i class="fas fa-user-check"></i>
            </div>
            <div className={classes.boxdata}>
              <div className={classes.boxfont1}>Client</div>
              <div className={classes.boxfont2}>{data.client}</div>
            </div>
          </div>

          <div className={classes.box3}>
            <div className={classes.box4}>
              <i class="far fa-map"></i>
            </div>
            <div className={classes.boxdata}>
              <div className={classes.boxfont1}>Location</div>
              <div className={classes.boxfont2}>{data.siteLocation}</div>
            </div>
          </div>
        </div>
        <div className={classes.box2} style={{}}>
          <div className={classes.box3}>
            <div className={classes.box4}>
              <i class="fas fa-project-diagram"></i>
            </div>
            <div className={classes.boxdata}>
              <div className={classes.boxfont1}>Project</div>
              <div className={classes.boxfont2}>{data.project}</div>
            </div>
          </div>

          <div className={classes.box3}>
            <div className={classes.box4}>
              <i class="fas fa-briefcase"></i>
            </div>
            <div className={classes.boxdata}>
              <div className={classes.boxfont1}>Work</div>
              <div className={classes.boxfont2}>{data.work}</div>
            </div>
          </div>
          <div className={classes.box3}>
            <div className={classes.box4}>
              <i class="fas fa-file-signature"></i>
            </div>
            <div className={classes.boxdata}>
              <div className={classes.boxfont1}>Work Title</div>
              <div className={classes.boxfont2}>{data.workTitle}</div>
            </div>
          </div>
        </div>

        <div className={classes.box2} style={{}}>
          <div className={classes.box3}>
            <div className={classes.box4}>
              <i class="fas fa-thumbtack"></i>
            </div>
            <div className={classes.boxdata1} style={{}}>
              <div className={classes.boxfont1}>Unit</div>
              <div className={classes.boxfont2}>{data.unit}</div>
            </div>
          </div>

          <div className={classes.box3}>
            <div className={classes.box4}>
              <i class="fas fa-industry"></i>
            </div>
            <div className={classes.boxdata1}>
              <div className={classes.boxfont1}>Project Type</div>
              <div className={classes.boxfont2}>{data.projectType}</div>
            </div>
          </div>

          <div className={classes.box3}>
            <div className={classes.box4}>
              <i class="fas fa-city"></i>
            </div>
            <div className={classes.boxdata1}>
              <div className={classes.boxfont1}>Building</div>
              <div className={classes.boxfont2}>{data.buildingArea}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstimationManagementProject;

import React, { Fragment } from "react";
import classes from "./TeamCard.module.css";

const Links = (props) => {
  return props.link === "" ? "" : <Fragment>{props.children}</Fragment>;
};

const TeamCard = ({
  img,
  Name,
  Designation,
  Whatsapp,
  Facebook,
  Twitter,
  Instagram,
  Phone,
}) => {
  return (
    <div class={`card shadow border-0 rounded ${classes.TeamCard}`}>
      <div class="card-body p-0">
        <img src={img} alt="" class="w-100 card-img-top" />
        <div class="p-4">
          <h5 class="mb-0">{Name}</h5>
          <p class="small text-muted">{Designation}</p>
          <ul
            class=" mb-0 list-inline mt-3 d-flex"
            style={{ justifyContent: "left", alignItems: "center" }}
          >
            <Links link={Phone}>
              <li
                class="list-inline-item m-0 mx-1"
                style={{
                  textAlign: "center",
                  width: "30px",
                  height: "30px",
                  border: "1px solid black",
                  paddingTop: "2px",
                  borderRadius: "50%",
                }}
              >
                <a
                  href={`tel:${Phone}`}
                  class="social-link"
                  style={{ color: "black" }}
                >
                  <i class="fas fa-phone"></i>
                </a>
              </li>
            </Links>

            <Links link={Twitter}>
              <li
                class="list-inline-item m-0 mx-1"
                style={{
                  textAlign: "center",
                  width: "30px",
                  height: "30px",
                  border: "1px solid black",
                  paddingTop: "2px",
                  borderRadius: "50%",
                }}
              >
                <a
                  href={Twitter}
                  class="social-link"
                  style={{ color: "black" }}
                >
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
            </Links>

            <Links link={Facebook}>
              <li
                class="list-inline-item m-0 mx-1"
                style={{
                  textAlign: "center",
                  width: "30px",
                  height: "30px",
                  border: "1px solid black",
                  paddingTop: "2px",
                  borderRadius: "50%",
                }}
              >
                <a
                  href={Facebook}
                  class="social-link"
                  style={{ color: "black" }}
                >
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
            </Links>

            <Links link={Instagram}>
              <li
                class="list-inline-item m-0 mx-1"
                style={{
                  textAlign: "center",
                  width: "30px",
                  height: "30px",
                  border: "1px solid black",
                  paddingTop: "2px",
                  borderRadius: "50%",
                }}
              >
                <a
                  href={Instagram}
                  class="social-link"
                  style={{ color: "black" }}
                >
                  <i class="fa fa-instagram"></i>
                </a>
              </li>
            </Links>

            <Links link={Whatsapp}>
              <li
                class="list-inline-item m-0 mx-1"
                style={{
                  textAlign: "center",
                  width: "30px",
                  height: "30px",
                  border: "1px solid black",
                  paddingTop: "2px",
                  borderRadius: "50%",
                }}
              >
                <a
                  href={Whatsapp}
                  class="social-link"
                  style={{ color: "black" }}
                >
                  <i class="fa fa-whatsapp"></i>
                </a>
              </li>
            </Links>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;

import useAppContext from "../../../context/appContext";
import { useContext } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UserImage from "../../../components/common/UserImage";
import GeneralContext from "../../context/GeneralContext";

const PvPModal = ({ show, setShow }) => {
  const { user, setGameDuration } = useAppContext();
  const { toChallenge, setToChallenge } = useContext(GeneralContext);

  const navigate = useNavigate();

  const handleClose = () => {
    setToChallenge(null);
    setShow(false);
  };

  const start60Day = () => {
    setShow(false);
    setGameDuration(60);
    navigate("/");
  };

  const start100Day = () => {
    setShow(false);
    setGameDuration(100);
    navigate("/");
  };

  return (
    <Modal
      dialogClassName="modal-40w"
      show={show}
      onHide={handleClose}
      centered
      className="casual-modal"
    >
      <Modal.Header>
        <div className="modal-head-img">
          <img src="/assets/img/game_modes/casual.png" alt="" />
        </div>

        <Modal.Title>Battle Arena</Modal.Title>

        <div className="btn-close" aria-label="Close" onClick={handleClose}>
          <i className="fa-solid fa-xmark"></i>
        </div>
      </Modal.Header>

      <Modal.Body>
        <p>
          Battle Arena is about to begin. <br /> You have a minute to beat your
          opponent. Good luck!
        </p>

        <div className="box casual">
          <Row className="gx-0">
            <Col md="5">
              <div className="user d-flex align-items-center">
                <p
                  className={`user-name ${
                    user?.name?.includes(".") ? "ens" : ""
                  }`}
                >
                  {user?.name || "Unnamed"} <br />{" "}
                  <small className="username">
                    @
                    {user?.username.length > 16
                      ? `${user?.username.substring(
                          0,
                          8
                        )}...${user?.username.substring(
                          user?.username.length - 4,
                          user?.username.length
                        )}`
                      : user?.username}
                  </small>
                </p>
                <UserImage
                  name="modal-img"
                  user={user}
                  pic={user?.profilepic?.key}
                />
              </div>
            </Col>

            <Col md="2" className="align-self-center">
              <p className="vs">vs</p>
            </Col>

            <Col md="5">
              <div className="user d-flex align-items-center">
                <UserImage
                  user={toChallenge}
                  profilepic={toChallenge?.profilepic}
                  name="modal-img"
                />
                <p
                  className={`user-name ${
                    toChallenge?.name?.includes(".") ? "ens" : ""
                  }`}
                >
                  {toChallenge?.name || "Unnamed"} <br />{" "}
                  <small className="username">
                    @
                    {toChallenge?.username?.length > 16
                      ? `${toChallenge?.username?.substring(
                          0,
                          8
                        )}...${toChallenge?.username?.substring(
                          toChallenge?.username?.length - 4,
                          toChallenge?.username?.length
                        )}`
                      : toChallenge?.username}
                  </small>
                </p>
              </div>
            </Col>
          </Row>
        </div>

        <div className="btn-container">
          <Button className="sub-btn" onClick={handleClose}>
            Back to Lobby
          </Button>
          <Button className="main-btn" onClick={start100Day}>
            Start Game
          </Button>
        </div>

        {/* <div className="btn-container">
          <Button className="cancel-btn" onClick={handleClose}>
            Decline Match
          </Button>
        </div> */}
      </Modal.Body>
    </Modal>
  );
};

export default PvPModal;

import React, { useState} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Avatar from "../style/images/avatar.png";
import Button from "react-bootstrap/Button";
import "../style/Style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useMediaQuery } from "react-responsive";
import { BiHomeAlt, BiAddToQueue, BiLogIn } from "react-icons/bi";
import { BsFillChatFill, BsPerson } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as Type from "../redux/user/type"

const NavbarHome = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const { user} = useSelector((state) => state)
  let checkUser;
  if(user?.user?.user){
    checkUser = user?.user?.user
  }else{
    checkUser = user?.user?.user
  }

  let IdUser;
  if(user?.id?.id){
    IdUser = user?.id?.id
  }else{
    IdUser = user?.id?.id
  }

  if(checkUser !== null && checkUser === true){
    const fetchResponse = async (req, res) => {
      const response = await axios.get(`https://motaro.herokuapp.com/admin/id/${IdUser}`)
      setName(response?.data.data[0].name)
      setImage(response?.data.data[0].image)
      return response;
    }
    fetchResponse();
  }




  const navigate = useNavigate();


  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 400 });
    return isMobile ? children : null;
  };
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 401 });
    return isNotMobile ? children : null;
  };
  const authLogin = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_END_POINT_TOKEN}`
      );
      if (response.data) {
        navigate("add");
      }
    } catch (error) {
      if (error.response) {
        Swal.fire("Please login", error.response, "info");
      }
    }
  };

  const authProfile = (e) => {
    e.preventDefault();
    if(checkUser !== null && checkUser === true){
      navigate("/profile")
     }else{
       Swal.fire("Please login", "Or you can register", "info");
     }
    
  };
  const addRecipe = (e) =>{
    e.preventDefault();
    if(checkUser !== null && checkUser === true){
      navigate("/add")
    }else{
      Swal.fire("Please login", "info");
    }
  }


  const handleDoor = (e) =>{
    e.preventDefault();
    if(checkUser === true && checkUser !== null){
        Swal.fire({
      title: 'Are you sure?',
      text: "Want to logout from Motaro!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes,Logout'
    }).then((result) => {
      if (result.isConfirmed) {
        if(checkUser !== null && checkUser === true){
          const Logout = async(req, res) =>{
            await axios.delete("https://motaro.herokuapp.com/logout")
            .then(() => {
              dispatch({
                type: Type.SET_USER,
                payload: {
                  user: false,
                }
              })
              dispatch({
                type: Type.SET_ID,
                payload: {
                  id: null,
                }
              })
              navigate("/")
            })
          }
          Logout();
        }
        Swal.fire(
          'Logout!',
          'You have successfully logged out',
          'success'
        )
      }else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Stay comfortable with motaro :)',
          'error'
        )
      }
    })
    }else{
      navigate("/login")
    }    
  }
  const handleChat =(e) =>{
    e.preventDefault(); 
    Swal.fire(
      'Comming soon...',
      'Features will be coming soon',
      'info'
    )

  }

  return (
    <>
      <Mobile>
        <Container className="sticky-top bg-light shadow position-fixed top-100 start-50 translate-middle navbar-mobile">
          <Navbar className="d-flex flex-rows justify-content-center">
            <Nav>
              <Button onClick={authLogin} className="btn-menu btn btn-warning">
                <BiHomeAlt className="icon" />
              </Button>
              <Button onClick={authLogin} className="btn-menu btn btn-warning">
                <BiAddToQueue className="icon" />
              </Button>
              <Button className="btn-menu btn btn-warning" onClick={handleChat}>
                <BsFillChatFill className="icon" />
              </Button>
              <Button onClick={authProfile} className="btn-menu btn btn-warning">
                <BsPerson className="icon" />
              </Button>
            </Nav>
          </Navbar>
        </Container>
      </Mobile>
      <Default>
        <Container fluid className="sticky-top bg-nav shadow">
          <Navbar expand="sm" id="nav-togle">
            <Container>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0 myColor ms-4"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link href="/" className="colorNav">
                    Home
                  </Nav.Link>
                  <Nav.Link onClick={addRecipe} className="colorNav">
                    Add Recipe
                  </Nav.Link>
                  <Nav.Link onClick={authProfile} className="colorNav">
                    Profile
                  </Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                  <p className="name">{name?  name : "Guest"}</p>
                  <img
                    src={image?  image : Avatar}
                    alt="imageNotDisplay"
                    width={30}
                    height={30}
                    className="rounded-circle"
                  />
                 
                    <Button
                      variant="outline-primary"
                      className="ms-3 btn-sm btn-bar"
                      onClick={handleDoor}
                    >
                      {checkUser? "Logout" : "login"}
                      <BiLogIn />
                    </Button>
                  
                </Navbar.Collapse>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </Default>
    </>
  );
};

export default NavbarHome;

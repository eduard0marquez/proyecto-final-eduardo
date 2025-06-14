import "../Login/LoginRegistrer.css";
import { useEffect, useState } from "react";
import React from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import logo from "../../../public/assets/logo.png";
import { BsDisplay } from "react-icons/bs";
import { authLogin } from "../../helpers/ApiLogin";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import axios from "axios";
import { crearUsuario } from "../../helpers/fetchApi";
import Swal from "sweetalert2";

function FormNuevoArticulo() {
  return <div></div>;
}

export default FormNuevoArticulo;

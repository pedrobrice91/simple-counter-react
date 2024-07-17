import Card from "../components/Card"
import 'bootstrap/dist/css/bootstrap.css';

const SecondsCounter = (props)=>{
  
   return <div className="d-flex"> 
      <Card segundos = {props.seconds6}/>
      <Card segundos = {props.seconds5}/>
      <Card segundos = {props.seconds4}/>
      <Card segundos = {props.seconds3}/>
      <Card segundos = {props.seconds2}/>
      <Card segundos = {props.seconds1}/>
      </div>      
    }

export default SecondsCounter 
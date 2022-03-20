import React,{useEffect} from 'react'
import BoardArea from './BoardArea'
import Header from '../Home/Header'
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getBoard } from '../../store/actions/BoardActions';

function Board() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBoard(Number(id)));
  }, []);
  
  return (
    <>
    <Header  />
    <BoardArea  />
    </>
  )
}

export default Board;
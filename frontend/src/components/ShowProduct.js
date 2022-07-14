import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecipe, recipeSelector } from "../features/recipeSlice";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ShowProduct = () => {
  const dispatch = useDispatch();
  const data = useSelector(recipeSelector.selectAll);

  useEffect(() => {
    dispatch(getRecipe());
  }, [dispatch]);

  return (
    <div className="container">
      <table className="table border custom-table">
        {data.map((data, index) => (
          <Card key={data[index]} style={{ width: "18rem" }}className="card-recipe">
            <Card.Img variant="top" src={data.image} className="image-responsive"/>
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Link to={`/edit/${data.recipe_id}`} variant="warning" className="btn btn-warning">edit</Link>
            </Card.Body>
          </Card>
        ))}
      </table>
    </div>
  );
};

export default ShowProduct;

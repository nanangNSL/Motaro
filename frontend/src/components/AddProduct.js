import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form";




const AddProduct = () => {
    // const [title,  setTitle] = useState('');
    // const [price,  setPrice] = useState('');
    // const dispatch = useDispatch();

    // const updateProduct = (e) => {
    //     e.preventDefault();
    //     dispatch(update({title, price}));
    // }

  return (
    <Col>
      <Form  className="form-horizontal mt-5 border p-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="label-login">title</Form.Label>
          <Form.Control type="text"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="label-login">Price</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Col>
  );
};

export default AddProduct;

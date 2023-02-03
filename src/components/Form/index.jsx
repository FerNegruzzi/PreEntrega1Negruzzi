import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'

const FormComp = ({ confirmPurchase, formVis, setFormVis }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues
    } = useForm();

    const onSubmit = (data) => {
        Swal.fire(
            'Purchase confirmed! :)',
            JSON.stringify(data),
            'success'
          )
        confirmPurchase(data);
    };

    const handleClose = () => {
        setFormVis(false)
    }

    return (
        <>
            <Modal show={formVis} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Checkout</Modal.Title>
                </Modal.Header>
                <form style={{ display: "flex" }} onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Body style={{ height: "25em" }}>
                        <label>First Name</label>
                        <input className="form-control"
                            {...register("firstName", {
                                required: true,
                                maxLength: 10,
                                minLength: 2,
                            })}
                        />
                        {errors?.firstName?.type === "required" && <p>This field is required</p>}
                        {errors?.firstName?.type === "maxLength" && (
                            <p>First name cannot exceed 10 characters</p>)}
                        {errors?.firstName?.type === "minLength" && (
                            <p>First name cannot be less than 2 characters</p>
                        )}
                        <label>Email</label>
                        <input 
                        type='email' 
                        name="email1" 
                        className="form-control" 
                        {...register("email1", { minLength: 10, required: true })} />
                        {errors?.email1?.type === "minLength" && (
                            <p>The email cannot be less than 10 characters</p>
                        )}
                        {errors?.email1?.type === "required" && <p>Email is required</p>}
                        <label>Repeat Email</label>
                        <input type='email' 
                        name="email2" 
                        className="form-control" 
                        {...register("email2", { minLength: 10, required: true, validate: { equalMails: mail2 => mail2 === getValues().email1 } })} />
                        {errors?.email2?.type === "minLength" && (
                            <p>The email cannot be less than 10 characters</p>
                        )}
                        {errors?.email2?.type === "required" && <p>You have to repeat your email</p>}
                        {errors?.email2?.type === "equalMails" && (<p>The mails have to be the same</p>)}
                        <label>Phone</label>
                        <input type="number" className="form-control" {...register("phone", { minLength: 10, maxLength: 10, required: true })} />
                        {errors?.phone?.type === "minLength" && (
                            <p>The email cannot be less than 10 characters</p>
                        )}
                        {errors?.phone?.type === "maxLength" && (
                            <p>The email cannot exceed 10 characters</p>)}
                        {errors?.phone?.type === "required" && <p>Phone number is required</p>}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Confirm Purchase
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>

    );
};

export default FormComp
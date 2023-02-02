import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const FormComp = ({confirmPurchase, formVis, setFormVis }) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Body>
                        <label>First Name</label>
                        <input
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
                        <input type='email' {...register("email", { minLength: 10, required: true })} />
                        {errors?.email?.type === "minLength" && (
                            <p>The email cannot be less than 10 characters</p>
                        )}
                        {errors?.email?.type === "required" && <p>Email is required</p>}
                        <label>Phone</label>
                        <input type="number" {...register("phone", { minLength: 10, maxLength: 10, required: true })} />
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
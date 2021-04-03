import { Formik } from 'formik';
import React from 'react';
import { Col, Form } from 'react-bootstrap';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Full name is required'),
  username: yup.string().required('User name is required'),
  email: yup.string().email('incorrect email!').required('Email is required'),
  street: yup.string(),
  suite: yup.string(),
  city: yup.string().required('City is required'),
  zipcode: yup.string(),
  lat: yup.number().typeError('Latitude must be a number'),
  lng: yup.number().typeError('Longitude must be a number'),
  phone: yup.string().required('Phone is required'),
  website: yup.string(),
  companyName: yup.string().required('Company name is required'),
  catchPhrase: yup.string(),
  bs: yup.string()
});

export default function EditForm({ updateUser, user }) {
  return (
    <Formik
      enableReinitialize
      validationSchema={schema}
      onSubmit={values => {
        updateUser(values);
      }}
      initialValues={user ?
        {
          name: user.name,
          username: user.username,
          email: user.email,
          suite: user.suite,
          city: user.city,
          street: user.street,
          zipcode: user.zipcode,
          lat: user.lat,
          lng: user.lng,
          phone: user.phone,
          website: user.website,
          companyName: user.companyName,
          catchPhrase: user.catchPhrase,
          bs: user.bs
        } : {
          name: '',
          username: '',
          email: '',
          suite: '',
          city: '',
          street: '',
          zipcode: '',
          lat: '',
          lng: '',
          phone: '',
          website: '',
          companyName: '',
          catchPhrase: '',
          bs: ''
        }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        errors,
      }) => (
        <Form id="UserEditForm" onSubmit={handleSubmit}>
          <h5>Main information</h5>
          <Form.Group>
            {/* NAME */}
            <Form.Row>
              <Col>
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  plaseholder="street"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.name && !errors.name}
                  isInvalid={touched.name && errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Col>
              {/* USER NAME */}
              <Col>
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  plaseholder="user name"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.username && !errors.username}
                  isInvalid={touched.username && errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </Col>
              {/* EMAIL */}
              <Col>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  plaseholder="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.email && !errors.email}
                  isInvalid={touched.email && errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group>
          <h5>Address</h5>
            <Form.Row>
              {/* CITY */}
              <Col >
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  plaseholder="city"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.city && !errors.city}
                  isInvalid={touched.city && errors.city}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.city}
                </Form.Control.Feedback>
              </Col>
              {/* STREET */}
              <Col>
                <Form.Label>Street</Form.Label>
                <Form.Control
                  type="text"
                  name="street"
                  plaseholder="street"
                  value={values.street}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.street && !errors.street}
                  isInvalid={touched.street && errors.street}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.street}
                </Form.Control.Feedback>
              </Col>
              {/* SUITE */}
              <Col>
                <Form.Label>Suite</Form.Label>
                <Form.Control
                  type="text"
                  name="suite"
                  plaseholder="suite"
                  value={values.suite}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.suite && !errors.suite}
                  isInvalid={touched.suite && errors.suite}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.suite}
                </Form.Control.Feedback>
              </Col>
            </Form.Row>

            <Form.Row>
              {/* zipcode */}
              <Col xs={2}>
                <Form.Label>Zipcode</Form.Label>
                <Form.Control
                  type="text"
                  name="zipcode"
                  plaseholder="zipcode"
                  value={values.zipcode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.zipcode && !errors.zipcode}
                  isInvalid={touched.zipcode && errors.zipcode}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.zipcode}
                </Form.Control.Feedback>
              </Col>
              {/* lat */}
              <Col xs={2}>
                <Form.Label>Latitude</Form.Label>
                <Form.Control
                  type="text"
                  name="lat"
                  plaseholder="lat"
                  value={values.lat}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.lat && !errors.lat}
                  isInvalid={touched.lat && errors.lat}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.lat}
                </Form.Control.Feedback>
              </Col>
              {/* lng */}
              <Col xs={2}>
                <Form.Label>Longitude</Form.Label>
                <Form.Control
                  type="text"
                  name="lng"
                  plaseholder="lng"
                  value={values.lng}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.lng && !errors.lng}
                  isInvalid={touched.lng && errors.lng}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.lng}
                </Form.Control.Feedback>
              </Col>
              {/* phone */}
              <Col>
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  plaseholder="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.phone && !errors.phone}
                  isInvalid={touched.phone && errors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phone}
                </Form.Control.Feedback>
              </Col>
            </Form.Row>
          </Form.Group>

          {/* company */}
          <Form.Group>
          <h5>Company</h5>
            <Form.Row>
              <Col>
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  type="text"
                  name="companyName"
                  plaseholder="companyName"
                  value={values.companyName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.companyName && !errors.companyName}
                  isInvalid={touched.companyName && errors.companyName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.companyName}
                </Form.Control.Feedback>
              </Col>
              {/* catchPhrase */}
              <Col>
                <Form.Label>Company Catchphrase</Form.Label>
                <Form.Control
                  type="text"
                  name="catchPhrase"
                  plaseholder="catchPhrase"
                  value={values.catchPhrase}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.catchPhrase && !errors.catchPhrase}
                  isInvalid={touched.catchPhrase && errors.catchPhrase}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.catchPhrase}
                </Form.Control.Feedback>
              </Col>
            </Form.Row>
            {/* bs */}
            <Form.Row>
              <Col>
                <Form.Label>Company BS</Form.Label>
                <Form.Control
                  type="text"
                  name="bs"
                  plaseholder="bs"
                  value={values.bs}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.bs && !errors.bs}
                  isInvalid={touched.bs && errors.bs}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.bs}
                </Form.Control.Feedback>
              </Col>
            </Form.Row>
          </Form.Group>

          {/* website */}
          <Form.Group>
            <Form.Label>Website</Form.Label>
            <Form.Control
              type="text"
              name="website"
              plaseholder="website"
              value={values.website}
              onChange={handleChange}
              onBlur={handleBlur}
              isValid={touched.website && !errors.website}
              isInvalid={touched.website && errors.website}
            />
            <Form.Control.Feedback type="invalid">
              {errors.website}
            </Form.Control.Feedback>
          </Form.Group>
        </Form>)}
    </Formik>
  )
}
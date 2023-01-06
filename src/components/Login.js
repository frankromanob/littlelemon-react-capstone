import React from 'react';
import { Modal, ModalBody, ModalHeader, Button, Form, FormGroup, Label, Input} from 'reactstrap'

function Login() {
return(
  <div className='order'>
    <h2>Login</h2>
    <h2>Here you can log in your account to manage your favouries dishes</h2>
    <Modal >
        <ModalHeader >Login</ModalHeader>
        <ModalBody>
        <Form onSubmit={this.handleLogin}>
            <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input type="text" id="username" name="username"
                    innerRef={(input) => this.username = input} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" name="password"
                    innerRef={(input) => this.password = input}  />
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" name="remember"
                    innerRef={(input) => this.remember = input}  />
                    Remember me
                </Label>
            </FormGroup>
            <Button type="submit" value="submit" color="primary">Login</Button>
        </Form>
        </ModalBody>
        </Modal>
  </div>
)
}

export default Login;
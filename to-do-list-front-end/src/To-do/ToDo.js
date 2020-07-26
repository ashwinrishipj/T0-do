import React from "react";
import { Nav, Card } from "react-bootstrap"


export default function Todo() {
    return (
        <div>
            <div className="row justify-content-center mt-2">
            <Nav fill variant="tabs" defaultActiveKey="link-0">
                <Nav.Item>
                    <Nav.Link eventKey="link-0">Active Tasks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Completed Tasks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3" >
                        Deleted Tasks
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            </div>
            <div className="row justify-content-center">

            </div>
        </div>
    );
}
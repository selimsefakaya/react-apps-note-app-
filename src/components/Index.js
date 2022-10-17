import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
    return (
        <>
            <div className="card card-header my-4 p-0">
                <div className="row">
                    <div className="card col-12">
                        <Link to="/note-app" className="btn btn-primary mx-5 my-2 py-5">
                            Note App in one Component
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="card col-6">
                        <Link
                            to="/note-app-not-context"
                            className="btn btn-primary mx-5 my-2 py-5"
                        >
                            Note App without Context Method
                        </Link>
                    </div>
                    <div className="card col-6">
                        <Link
                            to="/note-app-context"
                            className="btn btn-primary mx-5 my-2 py-5"
                        >
                            Note App with Context Method
                        </Link>
                    </div>
                </div>
            </div>

            <hr />
            <hr />
            <hr />

            <div className="card card-header my-4 p-0">
                <div className="row">
                    <div className="card col-6">
                        <Link to="/state-hook" className="btn btn-secondary mx-5 my-2 py-5">
                            Function Component State Hook Exercise
                        </Link>
                    </div>
                    <div className="card col-6">
                        <Link
                            to="/state-hook-class"
                            className="btn btn-secondary mx-5 my-2 py-5"
                        >
                            Class Component State Hook Exercise
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;

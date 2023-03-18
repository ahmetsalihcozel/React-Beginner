import React from 'react'
import ReactDOM from 'react-dom'
import Card from './components/Card'
import Collapse from './components/Collapse';

function App() {

    return (

        <div className='container'>

            <div className='row'>
                <div className='card-group w-100'>
                    <div className='col ml-2 mr-2'>
                        <Collapse href="CollapseExample1">
                            <Card cardTitle="Card Title I" 
                            cardText="Lorem Ipsum Text I" 
                            updatedTime="Last Updated 1 min ago"
                            cardImage="https://picsum.photos/id/1/500/900"
                            />
                        </Collapse>
                    </div>

                    <div className='col ml-2 mr-2'>
                        <Collapse href="CollapseExample2">
                            <Card cardTitle="Card Title II"
                            cardText="Lorem Ipsum Text II"
                            updatedTime="Last Updated 2 min ago"
                            cardImage="https://picsum.photos/id/10/500/900"
                            />
                        </Collapse>
                    </div>

                    <div className='col ml-2 mr-2'>
                        <Collapse href="CollapseExample3">
                            <Card cardTitle="Card Title III"
                            cardText="Lorem Ipsum Text III"
                            updatedTime="Last Updated 3 min ago"
                            cardImage="https://picsum.photos/id/100/500/900"
                            />
                        </Collapse>
                    </div>
                    
                </div>
            </div>
        </div>

    );

};

ReactDOM.render(
    <App/>, document.getElementById("root")
);
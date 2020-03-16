import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning</h4>
                    Are you Sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="James" 
                    date="Today at 6H00PM" 
                    post="Nice blog post!" 
                    img={faker.image.avatar()}
                />
            </ApprovalCard>
           <ApprovalCard> 
                <CommentDetail 
                    author="Alex" 
                    date="Yesterday at 5H45PM" 
                    post="Hard to follow" 
                    img={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard> 
                <CommentDetail 
                    author="Jane" 
                    date="Today at 4H00PM" 
                    post="Excellent" 
                    img={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDom.render(<App />, document.querySelector('#root'));
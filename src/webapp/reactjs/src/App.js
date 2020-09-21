import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import { Container, Row, Col } from 'react-bootstrap';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import BookList from './components/BookList';
import Book from './components/Book';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const marginTop = {
    marginTop: "20px"
  };

  return (
    <Router>
      <NavigationBar/>
      <Container>
        <Row>
          <Col lg={12} style={marginTop}>
            <Switch>
              <Route path="/" exact component={Welcome} />
              {/* Route에서 props 넘길때 함수로 넘긴다. */}
              {/* Route시에 같은 페이지면 새로운 객체를 안만들기 때문에 useEffect가 무조건 실행안된다.
              하지만 함수형으로 넘기면 최초 didMount된다. */}
              {/* 하지만 이때도 render로 넘기면 useEffect가 실행은 되는데 값이 변화했을 때만 update된다. */}
              <Route path="/add" exact component={()=> <Book/>} />
              <Route path="/edit/:id" exact component={Book} />
              <Route path="/list" exact component={BookList} />
            </Switch>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;

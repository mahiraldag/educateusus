import React, { Component } from 'react';
import fire from '../config/fire';

class YourComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  componentDidMount() {
    // name direkt referansa sahip olduğundan ref metodundan
    // dönen referans yeterli
    const nameRef = fire.database().ref('name');

    // on metodu firebase'de değişiklik olunca da çalışır
    // yani realtime çalışır.
    // once metodu sadece bir kere çalışır.
    // Realtime'a gerek yok ise once kullanılır.
    nameRef.on('value', (snapshot) => {
      this.setState({
        name: snapshot.val(),
      });
    });
  }

  componentWillUnmount() {
    fire
      .database()
      .ref('name')
      .off();
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <p className="lead">Your component is here</p>
        {`Data from firebase : ${name}`}
      </div>
    );
  }
}

export default YourComponent;

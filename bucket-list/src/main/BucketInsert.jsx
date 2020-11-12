import React, { Component } from "react";

class BucketInsert extends Component {
  /**
   * input box에서 사용자의 입력을 받아 저장할 state변수 선언하기
   *
   */
  state = {
    bucket_title: "",
  };

  handleOnchange = (e) => {
    this.setState({ bucket_title: e.target.value });
    /**
     * input box가 여러개일 경우
     * input box에 state변수명을 name 속성으로 지정
     * <input name="bucket_title"/>
     * 아래와 같이 변수값을 세팅한다.
     * this.setState({[e.target.name] : e.target.value })
     */
    this.setState({ [e.target.name]: e.target.value });
  };
  /**
   * 키보드로 문자열을 입력받는 도중 엔터키를 누르면
   */
  handleKeyPress = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      //props, state를 분해하지 않고 직접 핸들링
      //   this.props.bucketInsert(this.state.bucket_title);

      // const { bucketInsert } = this.props;
      //bucketInsert(this.state.bucket_title);

      const { bucketInsert } = this.props;
      const { bucket_title } = this.state;
      bucketInsert(bucket_title);
    }
  };
  render() {
    return (
      <section className="w3-container-fluid">
        <div className="w3-form-control w3-margin">
          <input
            name="bucket_title"
            value={this.state.bucket_title}
            onChange={this.handleOnchange}
            onKeyPress={this.handleKeyPress}
            className="w3-input w3-border w3-hover w3-gray w3-round"
            placeholder="추가할 내용을 입력"
          />
        </div>
      </section>
    );
  }
}

export default BucketInsert;

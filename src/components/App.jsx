import { Component } from 'react';
import {StickerList} from 'styles/app';
import { StickerItem } from 'styles/app';
import { Choice } from 'styles/app';

export class App extends Component {
  state = {
    data: this.props.data,
    choice: "",
    chosenImg: "",
  };

  changeSticker = (sticker) => {
    this.setState({ choice: sticker.label 
      , chosenImg: sticker.img
    });
  };

  render() {
    return (
      <div>
        <Choice className="choice">
          <img src={this.state.chosenImg} alt={this.state.choice} />
          <h1>Your sticker is <span>{this.state.choice}</span></h1>
        </Choice>
        <StickerList>
          {this.state.data.map((sticker, index) => (
            <StickerItem key={index} onClick={() => this.changeSticker(sticker)}>
              <img src={sticker.img} alt={sticker.label} />
            </StickerItem>
          ))}
        </StickerList>
      </div>
    );
  }
};

# React humaneye

React humaneye is a handy wrapper component for [tfjs-models/posenet](https://github.com/tensorflow/tfjs-models/tree/master/posenet)

## Documentation

TODO

## Example

TODO

## Installation

```bash
npm install --save react-humaneye
```

### Usage

```jsx
import humaneye from "react-humaneye"

export default function App() {
  return <humaneye />
}
```

## Core Feautres



gets called after estimation. [poses](https://github.com/tensorflow/tfjs-models/tree/master/posenet#keypoints) is a passed parameter  


the input image to feed through the network. see
[tfjs-posenet document](https://github.com/tensorflow/tfjs-models/tree/master/posenet#params-in-estimatesinglepose)  
If input is not specified react-posenet try to [getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)  

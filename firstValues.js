if (index === 0) {
  Animated.spring(that.state.pathD, {
    toValue: 22,
    duration: 10,
    friction: 10,
  }).start();
  setTimeout(function () {
    that.setState({
      showIcon: true,
    });
  }, 100);
  Animated.spring(that.state.circleRadius, {
    toValue: 211,
    friction: 10,
  }).start();
} else if (index === 2) {
  Animated.spring(that.state.pathD, {
    toValue: 691,
    duration: 10,
    friction: 10,
  }).start();

  setTimeout(function () {
    that.setState({
      showIcon: true,
    });
  }, 100);
  Animated.spring(that.state.circleRadius, {
    toValue: 880,
    friction: 10,
  }).start();
} else if (index === 1) {
  Animated.spring(that.state.pathD, {
    toValue: 357,
    duration: 10,
    friction: 10,
  }).start();

  setTimeout(function () {
    that.setState({
      showIcon: true,
    });
  }, 100);
  Animated.spring(that.state.circleRadius, {
    toValue: 546,
    friction: 10,
  }).start();
}

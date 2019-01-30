import React from "react";
import classNames from "classnames";
import { loadCSS } from "fg-loadcss/src/loadCSS";
import { withStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

const styles = theme => ({
  root: {},
  icon: {},
  iconHover: {}
});

class Star extends React.Component {
  state = {
    rating: 0,
    hovered: null
  };
  onHover = ({ target }) => {
    const id = Number(target.id);
    this.setState(() => ({
      hovered: id
    }));
  };
  onLeave = ({ target }) => {
    this.setState(() => ({
      hovered: null
    }));
  };
  onStarClick = ({ target }) => {
    const id = Number(target.id) + 1;
    this.setState(() => ({
      rating: id
    }));
  };

  componentDidMount() {
    loadCSS("https://use.fontawesome.com/releases/v5.5.0/css/all.css");
  }

  render() {
    const { classes, starsNumber } = this.props;
    const { rating, hovered } = this.state;
    let starsArray = [];
    const selectedStar = "selected-star";
    const hoveredStar = "hovered-star";
    const ratedStar = "rated-star";
    for (let i = 0; i < starsNumber; i += 1) {
      const icon = (hover, selected) => {
        starsArray.push(
          <Icon
            onMouseEnter={i => this.onHover(i)}
            onMouseLeave={i => this.onLeave(i)}
            onClick={i => this.onStarClick(i)}
            key={i}
            id={i}
            className={classNames(
              classes.icon,
              "fa fa-star star",
              hover,
              selected
            )}
          />
        );
      };

      if (rating > i) {
        if (hovered && hovered > i) {
          icon(hoveredStar, selectedStar);
        } else {
          icon(null, selectedStar);
        }
      } else {
        if (hovered && hovered > i) {
          icon(hoveredStar, null);
        } else {
          icon(null, null);
        }
      }
    }
    return <div className="star-rating">{starsArray}</div>;
  }
}

export default withStyles(styles)(Star);

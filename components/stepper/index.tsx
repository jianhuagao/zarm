import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropsType from './PropsType';
import Icon from '../icon';
import Button from '../button';

const getValue = (props, defaultValue) => {
  if ('value' in props) {
    return props.value;
  }
  if ('defaultValue' in props) {
    return props.defaultValue;
  }
  return defaultValue;
};

export interface StepperProps extends PropsType {
  prefixCls?: string;
  className?: string;
}

export default class Stepper extends PureComponent<StepperProps, any> {
  static defaultProps = {
    prefixCls: 'za-stepper',
    shape: 'rect',
    disabled: false,
    step: 1,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: getValue(props, 0),
      lastValue: getValue(props, 0),
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: Number(getValue(nextProps, 0)),
        lastValue: Number(getValue(nextProps, 0)),
      });
    }
  }

  onInputChange = (value) => {
    value = Number(value);
    const { onInputChange } = this.props;
    this.setState({ value });
    if (typeof onInputChange === 'function') {
      onInputChange(value);
    }
  }

  onInputBlur = (value) => {
    const { min, max, onChange } = this.props;
    value = Number(value);
    if (value === '' || Number.isNaN(Number(value))) {
      value = this.state.lastValue;
    }
    if (min !== null && value < min) {
      value = min;
    }
    if (max !== null && value > max) {
      value = max;
    }
    this.setState({
      value,
      lastValue: value,
    });
    if (typeof onChange === 'function') {
      onChange(value);
    }
  }

  onSubClick = () => {
    const { step } = this.props;
    const { value } = this.state;
    if (this.isSubDisabled()) {
      return;
    }

    const newValue = Number(value) - step;
    this.onInputBlur(newValue);
  }

  onPlusClick = () => {
    const { step } = this.props;
    const { value } = this.state;
    if (this.isPlusDisabled()) {
      return;
    }

    const newValue = Number(value) + step;
    this.onInputBlur(newValue);
  }

  isSubDisabled = () => {
    const { min, disabled } = this.props;
    const { value } = this.state;

    if (min === null) {
      return false;
    }
    return (value <= min) || disabled;
  }

  isPlusDisabled = () => {
    const { max, disabled } = this.props;
    const { value } = this.state;

    if (max === null) {
      return false;
    }
    return (value >= max) || disabled;
  }

  render() {
    const { prefixCls, className, shape, disabled } = this.props;
    const { value } = this.state;

    const cls = classnames(`${prefixCls}`, className, {
      [`shape-${shape}`]: !!shape,
      disabled,
    });

    const subCls = classnames(`${prefixCls}-sub`, {
      disabled: this.isSubDisabled(),
    });

    const plusCls = classnames(`${prefixCls}-plus`, {
      disabled: this.isPlusDisabled(),
    });

    const inputCls = classnames(`${prefixCls}-input`, {
      disabled,
    });

    return (
      <span className={cls}>
        <Button className={subCls} shape={shape} onClick={this.onSubClick}>-</Button>
        <input
          className={inputCls}
          type="tel"
          value={value}
          disabled={disabled}
          onChange={e => !disabled && this.onInputChange(e.target.value)}
          onBlur={() => !disabled && this.onInputBlur(value)}
        />
        <Button className={plusCls} shape={shape} onClick={this.onPlusClick}>+</Button>
      </span>
    );
  }
}

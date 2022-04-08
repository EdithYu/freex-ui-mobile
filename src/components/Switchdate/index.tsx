import * as React from 'react';
import { Icon, Calendar } from 'antd-mobile';
import moment from 'moment';
import 'antd-mobile/dist/antd-mobile.css';

class SwitchDate extends React.Component<any, any> {
  public static defaultProps = {
    maxDate: new Date(),
    minDate: moment('2021-01-01').toDate(),
  };

  public constructor(props: any) {
    super(props);
    this.state = {
      show: false,
      date: props.defaultDate ? moment(props.defaultDate).toDate() : new Date(),
      dateValue: props.defaultDate
        ? moment(props.defaultDate).format('YYYY-MM-DD')
        : moment().format('YYYY-MM-DD'),
    };
  }

  public handleConfirm = (dateTime?: Date) => {
    const { onConfirm } = this.props;
    this.setState({
      date: dateTime,
      show: false,
      dateValue: moment(dateTime).format('YYYY-MM-DD'),
    });
    if (onConfirm) {
      onConfirm(dateTime);
    }
  };

  public handlePre = () => {
    const { date, dateValue } = this.state;
    const { onConfirm } = this.props;
    if (this.canPre()) {
      this.setState(
        {
          date: moment(date)
            .subtract(1, 'days')
            .toDate(),
          dateValue: moment(dateValue)
            .subtract(1, 'days')
            .format('YYYY-MM-DD'),
        },
        () => {
          if (onConfirm) {
            onConfirm(this.state.date);
          }
        },
      );
    }
  };

  public handleNext = () => {
    const { date, dateValue } = this.state;
    const { onConfirm } = this.props;
    if (this.canNext()) {
      this.setState(
        {
          date: moment(date)
            .subtract(-1, 'days')
            .toDate(),
          dateValue: moment(dateValue)
            .subtract(-1, 'days')
            .format('YYYY-MM-DD'),
        },
        () => {
          if (onConfirm) {
            onConfirm(this.state.date);
          }
        },
      );
    }
  };

  public canPre = () => {
    const { date } = this.state;
    const { minDate } = this.props;
    return moment(date).isAfter(moment(minDate));
  };

  public canNext = () => {
    const { date } = this.state;
    return moment(date).isBefore(moment().format('YYYY-MM-DD'));
  };

  public render() {
    const { dateValue, date, show } = this.state;
    const { minDate, maxDate, ...restProps } = this.props;
    return (
      <div className="calendar-contanier">
        <div className="calendar-header">
          <span
            className={this.canPre() ? 'arrow-align' : 'arrow-align disabled'}
            onClick={() => this.handlePre()}
          >
            <Icon type="left" />
            前一天
          </span>
          <span
            className="date-info"
            onClick={() => this.setState({ show: true })}
          >
            {dateValue}
          </span>
          <span
            className={this.canNext() ? 'arrow-align' : 'arrow-align disabled'}
            onClick={() => this.handleNext()}
          >
            后一天
            <Icon type="right" />
          </span>
        </div>
        <Calendar
          type="one"
          infiniteOpt
          visible={show}
          minDate={minDate}
          maxDate={maxDate}
          onCancel={() => this.setState({ show: false })}
          {...restProps}
          defaultDate={date}
          defaultValue={[date]}
          onConfirm={(dateTime?: Date) => this.handleConfirm(dateTime)}
        />
      </div>
    );
  }
}

export default SwitchDate;

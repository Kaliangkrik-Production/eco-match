import React, { Component } from "react";

//define enum for notification type same with windows MessageBox type (warning, error, info, question)
enum TheFeedNotificationType {
  //define the enum
  //the notification type will be warning
  warning = "warning",
  //the notification type will be error
  error = "error",
  //the notification type will be info
  info = "info",
  //the notification type will be question
  question = "question",
}

interface TheFeedNotificationProps {
  //define the props interface
  //the component will receive a boolean value that will determine whether the notification will be displayed or not
  show: boolean;
  //the component will also receive a string value that will determine the text of the notification
  text: string;
  //the component will also receive a string value that will determine the title of the notification
  title: string;
  //the component will also receive a string value that will determine the color of the notification
  color: string;
}

interface TheFeedNotificationState {
  //define the state interface
  //the component will have a boolean value that will determine whether the notification will be displayed or not
  show: boolean;
}

//create the feed alert notification component that will be displayed at top right of the screen
class TheFeedNotification extends Component<
  TheFeedNotificationProps,
  TheFeedNotificationState
> {
  constructor(props: TheFeedNotificationProps) {
    super(props);
    this.state = {
      show: false,
    };
  }
  render() {
    return (
      <div className="fixed top-0 right-0 z-50 mt-4 mr-4">
        <div className="flex flex-col items-center">
          <div className="flex flex-row items-center rounded-lg bg-white p-4 shadow-lg">
            <div className="flex flex-col justify-center">
              <span className="text-xl font-bold text-gray-700">New Post</span>
              <span className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptates.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TheFeedNotification;

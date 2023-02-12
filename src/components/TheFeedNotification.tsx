"use client";
import React, { Component } from "react";

enum TheFeedNotificationType {
  warning = "warning",
  error = "error",
  info = "info",
  question = "question",
}

interface TheFeedNotificationProps {
  showMessage: (
    type: TheFeedNotificationType,
    text: string,
    title: string
  ) => void;
}

interface TheFeedNotificationState {
  type: TheFeedNotificationType;
  show: boolean;
  text: string;
  title: string;
  messages: NotificationMessage[];
}
interface NotificationMessage {
  type: TheFeedNotificationType;
  text: string;
  title: string;
}

//create the feed alert notification component that will be displayed at top right of the screen
class TheFeedNotification extends Component<
  TheFeedNotificationProps,
  TheFeedNotificationState
> {
  constructor(props: TheFeedNotificationProps) {
    super(props);
    this.state = {
      type: TheFeedNotificationType.info,
      show: false,
      text: "",
      title: "",
      messages: [],
    };
  }
  render() {
    return (
      <div className="fixed top-0 right-0 z-50 mt-4 mr-4">
        <div className="flex flex-col items-center">
          <div className="flex flex-row items-start rounded-lg bg-white p-4 shadow-lg">
            <div className="flex h-full w-2 bg-green-300"></div>
            <div className="flex flex-col justify-center pl-2">
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

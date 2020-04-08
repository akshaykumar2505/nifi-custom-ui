import React, { Component } from 'react';
import axios from 'axios';
class App extends Component {
  constructor() {
    super();
    this.state = {
      processorID: '09ebc2c7-0170-1000-35e9-3592dda8f1a7',
      agentEmail: '',
      status: 'STOPPED'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const headers = {
      'Content-Type': 'application/json',
    }
    let data = {
      "revision": {
        "clientId": "343a238d-0170-1000-c2e7-8d237348143e",
        "version": 61,
        "lastModifier": "anonymous"
      },
      "id": "09ebc2c7-0170-1000-35e9-3592dda8f1a7",
      "uri": "http://172.16.0.234:8080/nifi-api/processors/09ebc2c7-0170-1000-35e9-3592dda8f1a7",
      "position": {
        "x": 1008.0,
        "y": 8.0
      },
      "permissions": {
        "canRead": true,
        "canWrite": true
      },
      "bulletins": [],
      "component": {
        "id": "09ebc2c7-0170-1000-35e9-3592dda8f1a7",
        "parentGroupId": "09e72e00-0170-1000-3ecf-e55bf50939e8",
        "position": {
          "x": 1008.0,
          "y": 8.0
        },
        "name": "LiveChatProcessor",
        "type": "com.techsophy.processors.LiveChatAPI.LiveChatProcessor",
        "bundle": {
          "group": "com.techsophy",
          "artifact": "nifi-LiveChatAPI-processors",
          "version": "1.0.0"
        },
        "state": "STOPPED",
        "style": {
          "background-color": "#1742ed"
        },
        "relationships": [
          {
            "name": "COUNT",
            "description": "Count relationship",
            "autoTerminate": false
          },
          {
            "name": "FAILURE",
            "description": "Failure relationship",
            "autoTerminate": true
          },
          {
            "name": "SUCCESS",
            "description": "Success relationship",
            "autoTerminate": false
          }
        ],
        "supportsParallelProcessing": true,
        "supportsEventDriven": false,
        "supportsBatching": false,
        "persistsState": false,
        "restricted": false,
        "deprecated": false,
        "executionNodeRestricted": false,
        "multipleVersionsAvailable": false,
        "inputRequirement": "INPUT_ALLOWED",
        "config": {
          "properties": {
            "AGENT EMAIL": "akshay.g@techsophy",
            "ACCESS TOKEN": "dal:AVypiJaZSTiDiP-nWAFkqw"
          },
          "descriptors": {
            "AGENT EMAIL": {
              "name": "AGENT EMAIL",
              "displayName": "AGENT EMAIL",
              "description": "Email of the agent to retrieve chats",
              "required": true,
              "sensitive": false,
              "dynamic": false,
              "supportsEl": false,
              "expressionLanguageScope": "Not Supported"
            },
            "ACCESS TOKEN": {
              "name": "ACCESS TOKEN",
              "displayName": "ACCESS TOKEN",
              "description": "Personal Access Token",
              "required": true,
              "sensitive": false,
              "dynamic": false,
              "supportsEl": false,
              "expressionLanguageScope": "Not Supported"
            }
          },
          "schedulingPeriod": "10 sec",
          "schedulingStrategy": "TIMER_DRIVEN",
          "executionNode": "ALL",
          "penaltyDuration": "30 sec",
          "yieldDuration": "1 sec",
          "bulletinLevel": "WARN",
          "runDurationMillis": 0,
          "concurrentlySchedulableTaskCount": 1,
          "comments": "",
          "lossTolerant": false,
          "defaultConcurrentTasks": {
            "TIMER_DRIVEN": "1",
            "EVENT_DRIVEN": "0",
            "CRON_DRIVEN": "1"
          },
          "defaultSchedulingPeriod": {
            "TIMER_DRIVEN": "0 sec",
            "CRON_DRIVEN": "* * * * * ?"
          }
        },
        "validationStatus": "VALID",
        "extensionMissing": false
      },
      "inputRequirement": "INPUT_ALLOWED",
      "status": {
        "groupId": "09e72e00-0170-1000-3ecf-e55bf50939e8",
        "id": "09ebc2c7-0170-1000-35e9-3592dda8f1a7",
        "name": "LiveChatProcessor",
        "runStatus": "Stopped",
        "statsLastRefreshed": "18:20:26 IST",
        "aggregateSnapshot": {
          "id": "09ebc2c7-0170-1000-35e9-3592dda8f1a7",
          "groupId": "09e72e00-0170-1000-3ecf-e55bf50939e8",
          "name": "LiveChatProcessor",
          "type": "LiveChatProcessor",
          "runStatus": "Stopped",
          "executionNode": "ALL",
          "bytesRead": 0,
          "bytesWritten": 0,
          "read": "0 bytes",
          "written": "0 bytes",
          "flowFilesIn": 0,
          "bytesIn": 0,
          "input": "0 (0 bytes)",
          "flowFilesOut": 0,
          "bytesOut": 0,
          "output": "0 (0 bytes)",
          "taskCount": 0,
          "tasksDurationNanos": 0,
          "tasks": "0",
          "tasksDuration": "00:00:00.000",
          "activeThreadCount": 0,
          "terminatedThreadCount": 0
        }
      },
      "operatePermissions": {
        "canRead": true,
        "canWrite": true
      }
    }
    const processorID = this.state.processorID;
    const url = `http://172.16.0.234:8080/nifi-api/processors/${processorID}`
    data.component.config.properties["AGENT EMAIL"] = this.state.agentEmail;

    axios.put(url, data, {
      headers: headers
    })
      .then((response) => {
        console.log(response);
      })
  }

  startNifi = () => {
    const Url = 'http://172.16.0.234:8080/nifi-api/flow/process-groups/09e72e00-0170-1000-3ecf-e55bf50939e8';
    const body = {
      "id": "09e72e00-0170-1000-3ecf-e55bf50939e8",
      "state": "RUNNING"
    }
    const header = {
      'Content-Type': 'application/json',
    }
    axios.put(Url, body, {
      headers: header
    }).then((response) => {
      console.log(response);
    })
    this.setState({
      status: 'RUNNING'
    })
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} style={{ margin: '100px' }}>
          <label style={{ display: 'inline', marginRight: '20px' }}>
            Live Chat Processor ID
             </label>
          <input type="text" value={this.state.processorID} onChange={event => this.setState({ processorID: event.target.value })}
            style={{ width: '310px' }} /> <br /> <br />
          <label style={{ display: 'inline', marginRight: '20px' }}>
            Agent Email
          </label>
          <input type="text" value={this.state.agentEmail} onChange={event => this.setState({ agentEmail: event.target.value })} /> <br /> <br />
          <input type="submit" value="Submit" style={{ display: 'block' }} />
        </form>
        <button onClick={this.startNifi} style={{ marginLeft: '100px' }}>
          Start NiFi Process
       </button>
        <div style={{ marginLeft: '100px' }}>{this.state.status}</div>
      </>
    );
  }
}
export default App;
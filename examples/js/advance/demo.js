/* eslint max-len: 0 */
import React from 'react';
import EditTypeTable from './edit-type-table';
import DataInsertTypeTable from './insert-type-table';
import AutoRowKeyTable from './auto-rowkey-table';
import ValidatorTable from './validator-table';

import renderLinks from '../utils';

import { Col, Panel } from 'react-bootstrap';

class Demo extends React.Component {
  render() {
    return (
      <Col md={ 8 } mdOffset={ 1 }>
        <Panel header={ 'Cell Edit Type Example(text, textarea, select, checkbox)' }>
          { renderLinks('advance/edit-type-table.js') }
          <EditTypeTable/>
        </Panel>
        <Panel header={ 'Data Insert Type Example(text, textarea, select, checkbox)' }>
          { renderLinks('advance/insert-type-table.js') }
          <DataInsertTypeTable/>
        </Panel>
        <Panel header={ 'Auto RowKey on Data Insert Example' }>
          { renderLinks('advance/auto-rowkey-table.js') }
          <AutoRowKeyTable/>
        </Panel>
        <Panel header={ 'Data Validator Example(Job Name length must great 10 char)' }>
          { renderLinks('advance/validator-table.js') }
          <ValidatorTable/>
        </Panel>
      </Col>
    );
  }
}

export default Demo;

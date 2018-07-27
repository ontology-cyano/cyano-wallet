/*
 * Copyright (C) 2018 Matus Zamborsky
 * This file is part of The Ontology Wallet&ID.
 *
 * The The Ontology Wallet&ID is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * The Ontology Wallet&ID is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with The Ontology Wallet&ID.  If not, see <http://www.gnu.org/licenses/>.
 */
import * as React from 'react';
import { Button } from 'semantic-ui-react';
import { Filler, LogoHeader, View } from '../../../components';

export interface Props {
  handleCancel: () => void;

  handleSubmit: () => Promise<void>;
  loading: boolean;
  unboundOng: number;
}

export const LedgerWithdrawConfirmView: React.SFC<Props> = (props) => (
  <View orientation="column" fluid={true}>
    <View orientation="column" className="part gradient">
      <LogoHeader showLogout={true} title="ONG Withdrawal" />
      <View content={true} className="spread-around">
        <View>Confirm withdrawal of {props.unboundOng} ONG by Ledger.</View>
      </View>
    </View>
    <View orientation="column" fluid={true} content={true} className="spread-around">
      <Filler />
      <View className="buttons">
        <Button disabled={props.loading} onClick={props.handleSubmit} loading={props.loading}>Use Ledger</Button>
        <Button disabled={props.loading} onClick={props.handleCancel}>Cancel</Button>
      </View>
    </View>
  </View>
);

import React, { useEffect } from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'
import './ManageCampaign.scss'
import { Header } from '../../common/Header/Header'
import { Empty } from 'antd'
import { AddCampaign } from './AddCampaign'
import { ListCampaign } from './ListCampaign'
import { EditCampaign } from './EditCampaign'
import { CampaignDetail } from './CampaignDetail'
const managePath = '/a/campaign/manage';
export const ManageCampaign = ({
    fetchGiftVouchers,
    fetchFullCampaign,
    isFetching, campaigns = []
}) => {
    useEffect(() => {
        fetchGiftVouchers({page: 0, limit: 9999})
        if(campaigns.length === 0) {
            fetchFullCampaign()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="manage-campaign">
            <Header title="Manage Campaigns" />
            <div className="wrapper">
                <div className="wrapper__left">
                    <div className="manage-campaign-panel">
                        <NavLink
                            to={`${managePath}/add`}
                            className="manage-campaign-panel__add"
                            activeClassName="manage-campaign-panel__add--active"
                        >new</NavLink>
                    </div >
                    <ListCampaign isFetching={isFetching} campaigns={campaigns}/>
                </div>
                <div className="wrapper__right">
                    <Switch>
                        <Route exact path={managePath} render={() => <Empty />} />
                        <Route path={`${managePath}/add`} component={AddCampaign}  />
                        <Route path={`${managePath}/edit/:id`} component={EditCampaign}  />
                        <Route path={`${managePath}/detail/:id`} component={CampaignDetail}  />
                    </Switch>
                </div>
            </div>
        </div>
    )
}
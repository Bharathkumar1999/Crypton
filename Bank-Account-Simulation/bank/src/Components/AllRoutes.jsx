import React from 'react'

import { Route, Routes } from 'react-router-dom'
import OpenAccount from './OpenAccount'
// import DepositMoney from './DepositMoney'
// import WithdrawMoney from './WithdrawMoney'
// import TransferMoney from './TransferMoney'
// import ReceiveMoney from './ReceiveMoney'
import PrintStatement from './PrintStatement'
// import CloseAccount from './CloseAccount'
import UpdateAccount from './UpdateAccount'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
  return (
    <Routes>

        <Route path="/" element={<OpenAccount />}></Route>
        <Route path="/updateKYC" element={<PrivateRoute><UpdateAccount /></PrivateRoute>}></Route>
        {/* <Route path="/deposit" element={<DepositMoney/>}></Route>
        <Route path="/widthdraw" element={<WithdrawMoney />}></Route> 
        <Route path="/transfer" element={<TransferMoney />}></Route>
        <Route path="/receive" element={<ReceiveMoney />}></Route> */}
        <Route path="/print" element={<PrivateRoute><PrintStatement /></PrivateRoute>}></Route>
        {/* <Route path="/close" element={<CloseAccount />}></Route> */}
      
    </Routes>
  )
}

export default AllRoutes
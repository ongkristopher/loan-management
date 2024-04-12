"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAppSettings } from "@/firebase/requests/app-settings/get-app-settings";
import { getClientCount } from "@/firebase/requests/clients/get-client-count";
import { AppSettings } from "@/interface/app-settings";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import { useState, useEffect } from "react";

export default function WidgetStatus() {
  const [appSetting, setAppSetting] = useState<AppSettings>({
    cashOnHand: 0
  });

  const [clientCount, setClientCount] = useState(0);

  const fetchData = async () => {
    const itemsData = await getAppSettings();
    const clientCount = await getClientCount();
    setClientCount(clientCount);
    setAppSetting(itemsData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid gap-4 xs:grid-cols-2 md:gap-8 md:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">₱ 45,231.89</div>
          <p className="text-xs text-muted-foreground">
            +20.1% from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Clients</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{clientCount}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Available Cash</CardTitle>
          <CreditCard className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ₱ {appSetting.cashOnHand.toLocaleString()}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Cash on Loans</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">₱ 35,231.89</div>
        </CardContent>
      </Card>
    </div>
  );
}

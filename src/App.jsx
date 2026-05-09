import React from 'react';
import { 
  LayoutDashboard, 
  Package, 
  Truck, 
  AlertTriangle, 
  BarChart3, 
  Settings, 
  Search, 
  Bell, 
  User,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area 
} from 'recharts';

// Mock Data
const pipelineData = [
  { name: 'Mon', orders: 400, delay: 24 },
  { name: 'Tue', orders: 300, delay: 13 },
  { name: 'Wed', orders: 200, delay: 98 },
  { name: 'Thu', orders: 278, delay: 39 },
  { name: 'Fri', orders: 189, delay: 48 },
  { name: 'Sat', orders: 239, delay: 38 },
  { name: 'Sun', orders: 349, delay: 43 },
];

const App = () => {
  return (
    <div className="flex h-screen bg-[#0a0a0a] text-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-800 bg-[#0f0f0f] p-6 hidden md:flex flex-col">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-blue-600 rounded-lg">
            <LayoutDashboard size={24} className="text-white" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">SupplyChain360</h1>
        </div>
        
        <nav className="flex-1 space-y-2">
          <NavItem icon={<LayoutDashboard size={20} />} label="Overview" active />
          <NavItem icon={<Package size={20} />} label="Inventory" />
          <NavItem icon={<Truck size={20} />} label="Shipments" />
          <NavItem icon={<BarChart3 size={20} />} label="Analytics" />
          <NavItem icon={<AlertTriangle size={20} />} label="Alerts" />
        </nav>

        <div className="pt-6 border-t border-gray-800">
          <NavItem icon={<Settings size={20} />} label="Settings" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold">Supply Chain Monitor</h2>
            <p className="text-gray-400">Real-time visibility across retail operations.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                type="text" 
                placeholder="Search orders..." 
                className="bg-[#1a1a1a] border border-gray-800 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              />
            </div>
            <button className="p-2 bg-[#1a1a1a] border border-gray-800 rounded-full hover:bg-gray-800 transition-colors">
              <Bell size={20} />
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center font-bold">
              JD
            </div>
          </div>
        </header>

        {/* KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <KPICard 
            title="Total Inventory" 
            value="124,592" 
            trend="+12.5%" 
            trendUp={true} 
            icon={<Package className="text-blue-500" />}
          />
          <KPICard 
            title="Active Shipments" 
            value="1,204" 
            trend="-2.4%" 
            trendUp={false} 
            icon={<Truck className="text-purple-500" />}
          />
          <KPICard 
            title="Avg. Delivery Time" 
            value="2.4 Days" 
            trend="-0.5d" 
            trendUp={true} 
            icon={<Clock className="text-green-500" />}
          />
          <KPICard 
            title="Critical Stockouts" 
            value="12" 
            trend="+3" 
            trendUp={false} 
            icon={<AlertTriangle className="text-red-500" />}
          />
        </div>

        {/* Charts & Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Chart */}
          <div className="lg:col-span-2 bg-[#0f0f0f] border border-gray-800 rounded-2xl p-6 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold">Order Processing Pipeline</h3>
              <select className="bg-[#1a1a1a] border border-gray-800 rounded-lg px-3 py-1 text-xs">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={pipelineData}>
                  <defs>
                    <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#262626" vertical={false} />
                  <XAxis dataKey="name" stroke="#525252" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#525252" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#171717', border: '1px solid #262626', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Area type="monotone" dataKey="orders" stroke="#3b82f6" fillOpacity={1} fill="url(#colorOrders)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Alert Widget */}
          <div className="bg-[#0f0f0f] border border-gray-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-lg font-semibold mb-6">Critical Alerts</h3>
            <div className="space-y-4">
              <AlertItem 
                type="error"
                title="Low Inventory: SKU-882"
                time="10m ago"
                desc="Warehouse C is below safety levels (5%)."
              />
              <AlertItem 
                type="warning"
                title="Shipment Delay: #ORD-449"
                time="45m ago"
                desc="Carrier reported weather delay in Midwest."
              />
              <AlertItem 
                type="success"
                title="System Audit Complete"
                time="2h ago"
                desc="All data pipelines synced successfully."
              />
            </div>
            <button className="w-full mt-6 py-2 border border-gray-800 rounded-xl hover:bg-gray-800 transition-colors text-sm text-gray-400">
              View All Alerts
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

const NavItem = ({ icon, label, active = false }) => (
  <div className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all ${
    active ? 'bg-blue-600/10 text-blue-500' : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
  }`}>
    {icon}
    <span className="font-medium">{label}</span>
  </div>
);

const KPICard = ({ title, value, trend, trendUp, icon }) => (
  <div className="bg-[#0f0f0f] border border-gray-800 rounded-2xl p-6 shadow-sm hover:border-gray-700 transition-colors">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-[#1a1a1a] rounded-xl">
        {icon}
      </div>
      <div className={`flex items-center text-xs font-medium px-2 py-1 rounded-full ${
        trendUp ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
      }`}>
        {trendUp ? <ArrowUpRight size={14} className="mr-1" /> : <ArrowDownRight size={14} className="mr-1" />}
        {trend}
      </div>
    </div>
    <div>
      <p className="text-sm text-gray-400 mb-1">{title}</p>
      <h4 className="text-2xl font-bold">{value}</h4>
    </div>
  </div>
);

const AlertItem = ({ type, title, time, desc }) => {
  const iconMap = {
    error: <AlertTriangle size={18} className="text-red-500" />,
    warning: <Clock size={18} className="text-yellow-500" />,
    success: <CheckCircle2 size={18} className="text-green-500" />
  };

  return (
    <div className="flex gap-4 p-3 rounded-xl hover:bg-[#1a1a1a] transition-colors border border-transparent hover:border-gray-800">
      <div className="mt-1">{iconMap[type]}</div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
          <p className="text-sm font-semibold">{title}</p>
          <span className="text-[10px] text-gray-500">{time}</span>
        </div>
        <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};

export default App;

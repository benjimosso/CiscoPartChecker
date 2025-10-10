export interface Fans {
  id: number;
  fan_pn: string;
  image?: string;
  ciscofans?: [
    {
      cisco: {
        ciscopn: string;
        id: number;
      };
    }
  ]
}

export interface Rackmounts {
  id: number;
  rackpn: string;
  image?: string;
}

export interface PowerSupplies {
  id: number;
  power_pn: string;
  image?: string;
  ciscopowers?: [
    {
      cisco: {
        ciscopn: string;
        id: number;
      };
    }
  ]
}


// profiles interface
export interface Profiles {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  created_at: string;
  email: string;
  avatar: string;
  about: string;
  team_id: number;
  company_id: number;
  company?: {
    company_name: string;
  }
  teams?: {
    team_name: string;
  } 
}

export interface Comments {
  id: number;
  payload: string;
  created_at: string;
  profile_id: string;
  item_id: string;
  title: string;
  profiles: Profiles;
  first_name: string;
  last_name: string;
  team_id: number;
}

export interface Cisco {
  id: number;
  ciscopn: string;
  description: string;
  devicetype: string;
  fixmodular: string;
  console: string;
  dims: string;
  weight: string;
  rack_id: string;
  image?: string;

  ciscopowers?: [
    {
      power: {
        power_pn: string;
        id: number;
      };
    }
  ]
  ciscofans?: [
    {
      fan: {
        fan_pn: string;
        id: number;
      };
    }
  ]
}

export interface CiscoPn {
  id: number;
  ciscopn: string;
  images?: [string];
}
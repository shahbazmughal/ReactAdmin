export interface IProfileDetails {
  avatar: string
  listname: string
  gname: string
  fName: string
  lName: string
  owner_name: string
  owner_email: string
  owner_email_part1: string
  owner_email_part2: string
  reply_email: string
  communications: {
    firstname: boolean
    lastname: boolean
    birthdate: boolean
    city: boolean
    state: boolean
    country: boolean
    zip: boolean
    mobile: boolean
    phone: boolean
    fax: boolean
    company: boolean
    title: boolean
  }
  allowMarketing: boolean
}

export interface IUpdateEmail {
  newEmail: string
  confirmPassword: string
}

export interface IUpdatePassword {
  currentPassword: string
  newPassword: string
  passwordConfirmation: string
}

export interface IConnectedAccounts {
  google: boolean
  github: boolean
  stack: boolean
}

export interface IEmailPreferences {
  successfulPayments: boolean
  payouts: boolean
  freeCollections: boolean
  customerPaymentDispute: boolean
  refundAlert: boolean
  invoicePayments: boolean
  webhookAPIEndpoints: boolean
}

export interface INotifications {
  notifications: {
    firstname: boolean
    lastname: boolean
    birthdate: boolean
    city: boolean
    state: boolean
    country: boolean
    zip: boolean
    mobile: boolean
    phone: boolean
    fax: boolean
    company: boolean
    title: boolean

  }
  billingUpdates: {
    firstname: boolean
    lastname: boolean
    birthdate: boolean
    city: boolean
    state: boolean
    country: boolean
    zip: boolean
    mobile: boolean
    phone: boolean
    fax: boolean
    company: boolean
    title: boolean
  }
  newTeamMembers: {
    firstname: boolean
    lastname: boolean
    birthdate: boolean
    city: boolean
    state: boolean
    country: boolean
    zip: boolean
    mobile: boolean
    phone: boolean
    fax: boolean
    company: boolean
    title: boolean
  }
  completeProjects: {
    firstname: boolean
    lastname: boolean
    birthdate: boolean
    city: boolean
    state: boolean
    country: boolean
    zip: boolean
    mobile: boolean
    phone: boolean
    fax: boolean
    company: boolean
    title: boolean
  }
  newsletters: {
    firstname: boolean
    lastname: boolean
    birthdate: boolean
    city: boolean
    state: boolean
    country: boolean
    zip: boolean
    mobile: boolean
    phone: boolean
    fax: boolean
    company: boolean
    title: boolean
  }
}

export interface IDeactivateAccount {
  confirm: boolean
}

export const profileDetailsInitValues: IProfileDetails = {
  avatar: '/media/avatars/blank.png',
  listname:'',
  gname:'',
  fName: '',
  lName: '',
  owner_name: '',
  owner_email: '',
  owner_email_part1: '',
  owner_email_part2: '',
  reply_email: '',
  communications: {
    firstname: false,
    lastname: false,
    birthdate: false,
    city: false,
    state: false,
    country: false,
    zip: false,
    mobile: false,
    phone: false,
    fax: false,
    company: false,
    title: false,
  },
  allowMarketing: false,
}

export const updateEmail: IUpdateEmail = {
  newEmail: 'support@mumara.com',
  confirmPassword: '',
}

export const updatePassword: IUpdatePassword = {
  currentPassword: '',
  newPassword: '',
  passwordConfirmation: '',
}

export const connectedAccounts: IConnectedAccounts = {
  google: true,
  github: true,
  stack: false,
}

export const emailPreferences: IEmailPreferences = {
  successfulPayments: false,
  payouts: true,
  freeCollections: false,
  customerPaymentDispute: true,
  refundAlert: false,
  invoicePayments: true,
  webhookAPIEndpoints: false,
}

export const notifications: INotifications = {
  notifications: {
    firstname: true,
    lastname: true,
    birthdate: true,
    city: true,
    state: true,
    country: true,
    zip: true,
    mobile: true,
    phone: true,
    fax: true,
    company: true,
    title: true,
  },
  billingUpdates: {
    firstname: true,
    lastname: true,
    birthdate: true,
    city: true,
    state: true,
    country: true,
    zip: true,
    mobile: true,
    phone: true,
    fax: true,
    company: true,
    title: true,
  },
  newTeamMembers: {
    firstname: true,
    lastname: true,
    birthdate: true,
    city: true,
    state: true,
    country: true,
    zip: true,
    mobile: true,
    phone: true,
    fax: true,
    company: true,
    title: true,
  },
  completeProjects: {
    firstname: true,
    lastname: true,
    birthdate: true,
    city: true,
    state: true,
    country: true,
    zip: true,
    mobile: true,
    phone: true,
    fax: true,
    company: true,
    title: true,
  },
  newsletters: {
    firstname: true,
    lastname: true,
    birthdate: true,
    city: true,
    state: true,
    country: true,
    zip: true,
    mobile: true,
    phone: true,
    fax: true,
    company: true,
    title: true,
  },
}

export const deactivateAccount: IDeactivateAccount = {
  confirm: false,
}

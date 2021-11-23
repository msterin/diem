initSidebarItems({"constant":[["ACCOUNT_MODULE_IDENTIFIER","The Identifier for the Account module."],["CORE_CODE_ADDRESS",""],["DESIGNATED_DEALER_MODULE_IDENTIFIER","The Identifier for the Designated Dealer module."],["DIEM_MODULE_IDENTIFIER","The Identifier for the Diem module."],["EVENT_MODULE_IDENTIFIER",""],["VASP_DOMAIN_MODULE_IDENTIFIER","The Identifier for the VASPDomain module."],["XDX_IDENTIFIER",""],["XDX_NAME",""],["XUS_IDENTIFIER",""],["XUS_NAME",""]],"enum":[["AccountRole","A enum that captures the collection of role-specific resources stored under each account type"],["AccountSequenceInfo",""],["DesignatedDealerPreburns",""]],"fn":[["allowed_currency_code_string","In addition to the constraints for valid Move identifiers, currency codes should consist entirely of uppercase alphanumeric characters (e.g., no underscores)."],["coin_name","Return `Some(struct_name)` if `t` is a `StructTag` representing one of the current Diem coin types (XDX, XUS), `None` otherwise."],["currency_code_from_type_tag",""],["diem_root_address",""],["from_currency_code_string",""],["reserved_vm_address",""],["testnet_dd_account_address",""],["treasury_compliance_account_address",""],["type_tag_for_currency_code",""],["validator_set_address",""],["xdx_type_tag",""],["xus_tag",""]],"mod":[["constants",""],["events",""],["resources",""]],"static":[["ACCOUNT_MODULE","The ModuleId for the Account module."],["COIN_MODULE",""],["DESIGNATED_DEALER_MODULE","The ModuleId for the Designated Dealer module."],["DIEM_MODULE","The ModuleId for the Diem module."],["EVENT_MODULE",""],["XDX_MODULE",""]],"struct":[["AccountResource","A Rust representation of an Account resource. This is not how the Account is represented in the VM but it’s a convenient representation."],["AdminTransactionEvent","Struct that represents a AdminEvent."],["BalanceResource","The balance resource held under an account."],["BaseUrlRotationEvent","Struct that represents a BaseUrlRotationEvent."],["BurnEvent","Struct that represents a BurnEvent."],["CRSNResource",""],["CancelBurnEvent","Struct that represents a CancelBurnEvent."],["ChainIdResource",""],["ChildVASP",""],["ComplianceKeyRotationEvent","Struct that represents a ComplianceKeyRotationEvent."],["CreateAccountEvent",""],["Credential",""],["CurrencyInfoResource","Struct that represents a CurrencyInfo resource"],["DesignatedDealer",""],["ForceShiftEvent","Struct that represents a ForceShiftEvent."],["FreezingBit",""],["KeyRotationCapabilityResource",""],["Limit","Defines the dual attest limit in microDiem XDX"],["MintEvent","Struct that represents a MintEvent."],["NewBlockEvent","Struct that represents a NewBlockEvent."],["NewEpochEvent","Struct that represents a NewEpochEvent."],["ParentVASP",""],["PreburnEvent","Struct that represents a PreburnEvent."],["PreburnQueueResource","The preburn balance held under an account."],["PreburnResource","The preburn balance held under an account."],["PreburnWithMetadataResource","The preburn along with metadata held in a preburn queue."],["ReceivedMintEvent","Struct that represents a ReceivedMintEvent."],["ReceivedPaymentEvent","Struct that represents a ReceivedPaymentEvent."],["RoleId",""],["SentPaymentEvent","Struct that represents a SentPaymentEvent."],["ToXDXExchangeRateUpdateEvent","Struct that represents a ToXDXExchangeRateUpdateEvent"],["VASPDomain",""],["VASPDomainEvent",""],["VASPDomainManager",""],["VASPDomains",""],["WithdrawCapabilityResource",""]]});

{ config, pkgs,home-manager, ... }:

{

    users.users.jim = {
    isNormalUser = true;
#     isSystemUser = true;
    description = "jim";
    extraGroups = [ "networkmanager" "input" "wheel" "video" "audio" "tss" ];
    shell = pkgs.zsh;
    packages = with pkgs; [
     
    ];
  };

     home-manager.useUserPackages = true;
     home-manager.useGlobalPkgs = true;
     home-manager.users.jim = imports ./home.nix
     
    
  

    services.logind.extraConfig = "RuntimeDirectorySize=8G";

}





